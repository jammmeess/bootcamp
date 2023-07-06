<?php

namespace App\Http\Controllers;

use DB;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function show($id)
    {
        $name = "Daiben Angelo Sanchez";
        return view("students_show", compact("id", "name"));
    }

    public function index()
    {
        // $students = DB::select(
        //     "SELECT first_name, last_name, province FROM students ORDER BY last_name LIMIT 20"
        // );

        $students = Student::query()
            ->select("first_name", "last_name", "province")
            ->orderBy("last_name")
            ->limit(20)
            ->get();

        // $total_student = DB::select(
        //     "SELECT COUNT(student_id) as total FROM students"
        // );

        $total_student = Student::query()
            ->select(DB::raw("COUNT(student_id) as total"))
            ->get();

        // $total_fem_student = DB::select(
        //     "SELECT COUNT(student_id) as total_fem FROM students WHERE gender = 'female'"
        // );

        $total_fem_student = Student::query()
            ->select(DB::raw("COUNT(student_id) as total_fem"))
            ->where("gender", "=", "female")
            ->get();

        $student_classes = Student::query()
            ->select(
                "students.first_name",
                "students.last_name",
                "students_classes.class_id"
            )
            ->join(
                "students_classes",
                "students.student_id",
                "=",
                "students_classes.student_id"
            )
            ->get();

        return view(
            "students",
            compact("students", "total_student", "total_fem_student")
        );
    }
}
