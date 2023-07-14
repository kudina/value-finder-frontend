import Layout from "../../components/Layout";
import ProfileContent from "./ProfileContent";
import { useGetCurrentUserQuery } from "../../features/api/apiSlice";
import ClientLayout from "../../components/ClientLayout";

const Profile = () => {
  const { data: currentUser } = useGetCurrentUserQuery();

  return (
    <>
      {currentUser?.userType !== "client" ? (
        <Layout>
          <ProfileContent />
        </Layout>
      ) : (
        <ClientLayout>
          <ProfileContent />
        </ClientLayout>
      )}
    </>
  );
};

export default Profile;
