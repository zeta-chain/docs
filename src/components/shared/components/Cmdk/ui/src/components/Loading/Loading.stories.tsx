import React, { useState } from "react";

import { Card } from "../Card";
import { Loading } from ".";

export default {
  title: "Utilities/Loading",
  component: Loading,
};

export const Default = (args: any) => {
  return (
    <>
      <Loading {...args}>
        <Card title={"This card can be set to loading"}></Card>
      </Loading>
    </>
  );
};

Default.args = {
  active: true,
};
