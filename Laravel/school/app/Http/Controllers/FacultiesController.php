<?php

namespace App\Http\Controllers;
use App\Models\Faculty;
use DB;

use Illuminate\Http\Request;

class FacultiesController extends Controller
{
    public function index()
    {
        // $faculties = DB::select(
        //     "SELECT first_name, last_name, department, faculty_id FROM faculties ORDER BY last_name LIMIT 25"
        // );

        $faculties = Faculty::query()
            ->select("last_name", "first_name", "department", "faculty_id")
            ->orderBy("last_name")
            ->limit(25)
            ->get();

        // $facultyData = DB::select(
        //     "SELECT department, COUNT(*) AS total_faculty FROM faculties WHERE department NOT LIKE 0 GROUP BY department;"
        // );

        $facultyData = Faculty::query()
            ->select("department", DB::raw("COUNT(*) as total_faculty"))
            ->groupBy("department")
            ->get();

        // $academe_points = DB::select(
        //     "SELECT f.first_name, f.last_name, fe.academe_points FROM faculties as f JOIN faculties_educ as fe ON f.faculty_id = fe.faculty_id WHERE fe.academe_points >= 1200 ORDER BY last_name LIMIT 5"
        // );

        $academe_points = Faculty::query()
            ->select("last_name", "first_name", "academe_points")
            ->join(
                "faculties_educ",
                "faculties.faculty_id",
                "=",
                "faculties_educ.faculty_id"
            )
            ->where("faculties_educ.academe_points", ">=", 1200)
            ->orderBy("last_name")
            ->limit(5)
            ->get();

        return view(
            "faculties",
            compact("faculties", "facultyData", "academe_points")
        );
    }
}
