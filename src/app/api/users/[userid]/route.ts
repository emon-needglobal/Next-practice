import { NextResponse } from "next/server";
import data from "@/data.json";

export async function GET(request: Request, context: any) {
  const { params } = context;
  console.log(params);
  console.log(params);

  const user = data.filter((x) => params.userid === x.id.toString());

  console.log(user);
  return NextResponse.json({
    user,
  });
}
