import React from "react";
import { Box, CardContent, Card, Stack, Typography } from "@mui/material";

type Props = {
  header: string;
  item?: string;
  units?: number;
  misc?: number | string | undefined;
};

function CardComponent({ header, item, units, misc }: Props) {
  return (
    <Box sx={{ margin: 1, textAlign: "center" }}>
      <Card>
        <CardContent>
          <Stack>
            <Typography component="h3">{header}</Typography>
          </Stack>
          <Stack direction="row" spacing="1" justifyContent="space-around">
            {item && (
              <Typography sx={{ mr: 0.5 }}>
                Item:
                <Typography component="span" fontWeight="bold">
                  {item}
                </Typography>
              </Typography>
            )}
            {units && (
              <Typography>
                Units sold:
                <Typography component="span" fontWeight="bold">
                  {units}
                </Typography>
              </Typography>
            )}
            {misc && (
              <Typography component="span" fontWeight="bold">
                {misc}
              </Typography>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CardComponent;
