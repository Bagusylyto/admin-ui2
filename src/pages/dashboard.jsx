import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import CardBill from "../components/Fragments/Dashboard/cardBill";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/cardExpenseBreakdown";
import CardTransaction from "../components/Fragments/Dashboard/cardTransaction";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card title="Goals" />
        <CardBill />
        <CardTransaction />
        <Card variant="md:col-span-2" title="Statistics" />
        <CardExpenseBreakdown />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
