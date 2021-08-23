import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
const { Option, OptGroup } = Select;

const data = [
  {
    id: 1,
    label: "Drop 1",
    code: "DROP_1",
    monitor_subtypes: [
      { id: 1, label: "sub 1", code: "SUB_1" },
      { id: 2, label: "sub 2", code: "SUB_2" }
    ]
  },
  {
    id: 2,
    label: "Drop 2",
    code: "DROP_2",
    monitor_subtypes: [
      { id: 3, label: "sub 1", code: "SUB_1" },
      { id: 4, label: "sub 2", code: "SUB_2" },
      { id: 5, label: "sub 3", code: "SUB_3" }
    ]
  }
];

export default function App() {
  return (
    <Select defaultValue="SELECT ME" style={{ width: 200 }}>
      {data.map((data1) => {
        return (
          <OptGroup key={data1.id} label={data1.label}>
            {data1.monitor_subtypes.map((data2) => {
              return (
                <Option key={data2.id} value={data2.label}>
                  {data2.label}
                </Option>
              );
            })}
          </OptGroup>
        );
      })}
    </Select>
  );
}
