import DashboardBox from "@/components/Dashboard";
type Props = {};

const Row3 = (props: Props) => {
  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="g" />
      <DashboardBox bgcolor="#fff" gridArea="h" />
      <DashboardBox bgcolor="#fff" gridArea="i" />
      <DashboardBox bgcolor="#fff" gridArea="j" />
    </>
  );
};

export default Row3;
