import { Card, CardContent, CardHeader } from "@/shared/ui/card";
import React from "react";
import { NewProps } from "../model/props";

const New = ({ text, title, date }: NewProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between">
        <div className="text-xl font-bold">{title}</div>
        <div className="font-light text-zinc-400">{date}</div>
      </CardHeader>
      <CardContent>{text}</CardContent>
    </Card>
  );
};

export default New;
