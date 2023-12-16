import { NextRequest, NextResponse } from "next/server";
import { alumnos } from "@/mock/alumnos";

export function GET(req: NextRequest) {
    return NextResponse.json(alumnos);
}

