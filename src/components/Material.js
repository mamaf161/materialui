import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import Collapse from "@mui/material/Collapse";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Material() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div style={{ width: "80%", margin: "40px auto" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Switch
            {...label}
            value={checked}
            onChange={() => {
              setChecked((prev) => !prev);
            }}
            defaultChecked
          />
        </AccordionDetails>
      </Accordion>
      <Collapse in={checked} collapsedSize={100}>
        <div style={{ height: "400px", background: "orange" }}>
          <h2 style={{ padding: "20px" }}>hello mohamed</h2>
        </div>
      </Collapse>
    </div>
  );
}
