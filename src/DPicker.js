import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { DateTime } from "luxon";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
import { DateTimePicker, LocalizationProvider } from "@material-ui/pickers";

function DPicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <Grid container spacing={1}>
        <Grid item>
          <DateTimePicker
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(props) => <TextField {...props} />}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              var isoTime = selectedDate.toISOString();
              var tobject = DateTime.fromISO(isoTime);
              props.onChoose(tobject);
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

export default DPicker;
