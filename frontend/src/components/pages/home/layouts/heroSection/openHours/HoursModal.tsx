import { IconButton, Modal, ModalDialog, Table } from "@mui/joy";
import { IoIosArrowUp as Icon } from "react-icons/io";

const HoursModal = () => {
  const placeholderData = [
    { opensAt: "07 : 45", closesAt: "11 : 45" },
    { opensAt: "07 : 45", closesAt: "11 : 45" },
    { opensAt: "07 : 45", closesAt: "11 : 45" },
    { opensAt: "07 : 45", closesAt: "11 : 45" },
    { opensAt: "14 : 30", closesAt: "11 : 45" },
    { opensAt: "07 : 45", closesAt: "11 : 45" },
    { opensAt: "07 : 45", closesAt: "11 : 45" },
  ];

  return (
    <Modal open={false}>
      <ModalDialog>
        <Table aria-label="basic table">
          <thead>
            <tr>
              <th>Week D.</th>
              <th>Opens ar</th>
              <th>Closes at</th>
            </tr>
          </thead>
          <tbody>
            {placeholderData.map((el, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el.opensAt}</td>
                <td>{el.closesAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <IconButton>
          <Icon />
        </IconButton>
      </ModalDialog>
    </Modal>
  );
};

export default HoursModal;
