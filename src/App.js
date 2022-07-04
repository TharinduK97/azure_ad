import './App.css';
import PageLayout from "./PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import ProfileContent from "./ProfileContent";

function App() {

  return (
    <PageLayout>
       <Route path="/profile" element={<AuthenticatedTemplate>
        <ProfileContent />
        
      </AuthenticatedTemplate>} />
      

      <UnauthenticatedTemplate>
        <h1>You are not signed in! Please sign in.</h1>
      </UnauthenticatedTemplate>

    </PageLayout>
  );
}

export default App;
