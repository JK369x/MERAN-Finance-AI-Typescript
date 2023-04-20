import DashboardBox from "@/components/Dashboard";
import { useGetKpisQuery } from "@/state/api";
type Props = {};

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="a" />
      <DashboardBox bgcolor="#fff" gridArea="b" />
      <DashboardBox bgcolor="#fff" gridArea="c" />
    </>
  );
};

export default Row1;
