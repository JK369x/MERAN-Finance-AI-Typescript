import DashboardBox from "@/components/Dashboard";
type Props = {};

const Row2 = (props: Props) => {
  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="d" />
      <DashboardBox bgcolor="#fff" gridArea="e" />
      <DashboardBox bgcolor="#fff" gridArea="f" />
    </>
  );
};

export default Row2;
