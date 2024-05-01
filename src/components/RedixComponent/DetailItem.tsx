import { Box, Tabs, Table, Heading, Text, Button } from "@radix-ui/themes";
import React, { useState } from "react";
import { ICartData } from "../../pages/CardRadixUiPage";

interface IParams {
  memory: number;
  ram: number;
}

type Props = {
  data: ICartData;
  params: IParams;
};

function DetailItem({ data, params }: Props) {
  const [fullHeight, setFullHeight] = useState(false);

  const handleFullHeight = () => {
    setFullHeight(true);
  };
  return (
    <Box>
      <Tabs.Root defaultValue="features">
        <Tabs.List>
          <Tabs.Trigger value="features">Features</Tabs.Trigger>
          <Tabs.Trigger value="description">Description</Tabs.Trigger>
          <Tabs.Trigger value="in-box">In box</Tabs.Trigger>
          <Tabs.Trigger value="delivery">Delivery</Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="features">
            <Table.Root
              mb="4"
              style={
                fullHeight ? {} : { maxHeight: "220px", overflow: "hidden" }
              }
            >
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>
                    Item specifics
                  </Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row key="memory">
                  <Table.RowHeaderCell>Memory:</Table.RowHeaderCell>
                  <Table.Cell>{params.memory}GB</Table.Cell>
                </Table.Row>
                <Table.Row key="ram">
                  <Table.RowHeaderCell>RAM:</Table.RowHeaderCell>
                  <Table.Cell>{params.ram}GB</Table.Cell>
                </Table.Row>
                {data.features.map((f) => (
                  <Table.Row key={f.name}>
                    <Table.RowHeaderCell>{f.name}</Table.RowHeaderCell>
                    <Table.Cell>{f.value}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
            {!fullHeight && (
              <Button
                onClick={handleFullHeight}
                variant="ghost"
                style={{
                  paddingLeft: "24px",
                  color: "#1f1f1f",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                ALL FEATURES
              </Button>
            )}
          </Tabs.Content>

          <Tabs.Content value="description">
            <Text size="3">{data.condition}</Text>
          </Tabs.Content>

          <Tabs.Content
            value="in-box"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              gap: "8px",
            }}
          >
            <Heading as="h3">New in box with Accessories:</Heading>
            {data["in-box"].map((e) => (
              <Text size="3" key={e}>
                {e}
              </Text>
            ))}
          </Tabs.Content>
          <Tabs.Content value="delivery">
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>
                    Item specifics
                  </Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>Located in:</Table.RowHeaderCell>
                  <Table.Cell>{data.delivery.location}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>Shipping:</Table.RowHeaderCell>
                  <Table.Cell>{data.delivery.shipping}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>Delivery:</Table.RowHeaderCell>
                  <Table.Cell>{data.delivery.delivery}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>Returns:</Table.RowHeaderCell>
                  <Table.Cell>{data.delivery.returns}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>Payments:</Table.RowHeaderCell>
                  <Table.Cell style={{ display: "flex", gap: "8px" }}>
                    {data.delivery.payments.map((p) => (
                      <Text key={p}>{p}</Text>
                    ))}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Box>
  );
}

export default DetailItem;
