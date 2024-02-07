import { Button, Modal, ModalDialog, Table } from "@mui/joy";
import { IoIosArrowUp as Icon } from "react-icons/io";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HoursModal = (props: Props) => {
  const placeholderData = [
    { firstDay: "(mon)", opensAt: "07 : 45", closesAt: "11 : 45" },
    { opensAt: "07 : 45", closesAt: "11 : 45" },
    { opensAt: "07 : 45", closesAt: "11 : 45" },
    { opensAt: "07 : 45", closesAt: "11 : 45" },
    { opensAt: "14 : 30", closesAt: "11 : 45" },
    { opensAt: "07 : 45", closesAt: "11 : 45" },
    { opensAt: "07 : 45", closesAt: "11 : 45" },
  ];

  const styles = {
    head: {
      fontSize: "0.875rem",
      backgroundColor: "transparent",
    },
    data: { fontSize: "0.75rem", fontWeight: "bold" },
  };

  return (
    <Modal open={props.open}>
      <ModalDialog
        sx={(theme) => ({
          width: { xs: "100%", md: "auto" },
          maxWidth: { lg: "26.25rem" },
          borderRadius: "0.5rem",
          bgcolor: theme.palette.primary[100],
        })}
      >
        <Table>
          <thead>
            <tr>
              <th style={styles.head}>Week D.</th>
              <th style={styles.head}>Opens at</th>
              <th style={styles.head}>Closes at</th>
            </tr>
          </thead>
          <tbody>
            {placeholderData.map((el, i) => (
              <tr key={i}>
                <td style={styles.data}>{el.firstDay || i + 1}</td>
                <td style={styles.data}>{el.opensAt}</td>
                <td style={styles.data}>{el.closesAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button startDecorator={<Icon />} onClick={() => props.setOpen(false)}>
          Close
        </Button>
      </ModalDialog>
    </Modal>
  );
};

export default HoursModal;
