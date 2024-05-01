import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ShadcnComponent/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "src/components/ShadcnComponent/ui/table";
import { IPhoneData } from "./ShadcnCard";

type Props = {
  data: IPhoneData;
};

function DetailItem({ data }: Props) {
  return (
    <Tabs defaultValue="" className="max-w-[800px]">
      <TabsList className="mb-10 text-[#1f1f1f]">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
        <TabsTrigger value="reviews">
          Reviews({data.reviews.length})
        </TabsTrigger>
        <TabsTrigger value="accessories">Accessories</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="text-2xl">
        {data.condition}
      </TabsContent>
      <TabsContent value="characteristics">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Item specifics</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.characteristics.map((i) => (
              <TableRow key={i.name}>
                <TableCell className="font-medium">{i.name}</TableCell>
                <TableCell>{i.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="reviews">
        {!data.reviews.length && (
          <p className="text-2xl font-medium text-center">
            There are no reviews yet
          </p>
        )}
      </TabsContent>
      <TabsContent value="accessories">
        {!data.accessories.length && (
          <p className="text-2xl font-medium text-center">Nothing Found</p>
        )}
      </TabsContent>
    </Tabs>
  );
}

export default DetailItem;
