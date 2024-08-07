import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    employees: {
      employee: [
        {
          id: "1",
          firstName: "Tom",
          lastName: "Cruise",
          photo: "https://jsonformatter.org/img/tom-cruise.jpg"
        },
        {
          id: "2",
          firstName: "Maria",
          lastName: "Sharapova",
          photo: "https://jsonformatter.org/img/Maria-Sharapova.jpg"
        },
        {
          id: "3",
          firstName: "Robert",
          lastName: "Downey Jr.",
          photo: "https://jsonformatter.org/img/Robert-Downey-Jr.jpg"
        }
      ]
    }
  });
}
