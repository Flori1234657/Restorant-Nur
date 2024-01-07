import { Option, Select } from "@mui/joy";
import { FaFilter } from "react-icons/fa";
import { selectClasses } from "@mui/joy/Select";
import { IoIosArrowDown } from "react-icons/io";
import useViewPortWidth from "../../../../hooks/useViewPortWidth";

const Filter = () => {
  const { vw } = useViewPortWidth();

  return (
    <Select
      startDecorator={<FaFilter />}
      placeholder={vw > 899 ? "Filter" : ""}
      indicator={<IoIosArrowDown />}
      sx={{
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      <Option value="FilterOpt">FilterOpt</Option>
    </Select>
  );
};

export default Filter;
