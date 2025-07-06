import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import React from "react";

const Enhanced = () => {
  return (
    <Card className="w-full border-transparent" id="more">
      <CardHeader>
        <CardTitle className="text-2xl">
          Классический геймплей, новые фишки
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1">
        Сервер не перегружен имбалансными модами или плагинами которые ломают
        игру. На сервере стоит ограниченное количество тщательно подобранных
        плагинов, а также сервер постоянно пополняется самописными наработками,
        которые делают игровой процесс интереснее и проще. Также на сервере
        установлены датапаки, которые улучшают генерацию мира.
      </CardContent>
    </Card>
  );
};

export default Enhanced;
