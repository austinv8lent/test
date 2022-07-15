import React from "react";
import Text from "../../../../components/Text";
import { Card, CardBody, CardHeader } from "../../../../components/Card";
import ViewDeckCardActions from "./ViewDeckCardActions.component";

const ViewDeckCard = ({ description, id, name }) => {
  return (
    <Card className="p-0 border-0">
      <CardHeader>
        <Text.Heading level={3}>{name}</Text.Heading>
      </CardHeader>
      <CardBody className="p-0">
        <Text.Paragraph>{description}</Text.Paragraph>
        <ViewDeckCardActions id={id} />
      </CardBody>
    </Card>
  );
};
export default ViewDeckCard;
