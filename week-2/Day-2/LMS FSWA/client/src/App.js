import './App.css';
import { AdminDashboard } from './Components/Admin/AdminDashboard';
import { Route, Routes } from 'react-router-dom';
import { AdminStudentForm } from './Components/Admin/AdminStudentForm';
import { AdminContestForm } from './Components/Admin/AdminContestForm';
import { AdminContest } from './Components/Admin/AdminContest';
import { SignIn } from './Components/SignIn/Signin';
import { StudentDashboard } from './Components/Students/StudentDashboard';

function App() {
  return (
    <div className="App">
          <Routes>
          <Route exact path="/admin" element={<AdminDashboard />}></Route>
          <Route exact path="/studentform" element={<AdminStudentForm />}></Route>
          <Route exact path="/contest" element={<AdminContest />}></Route>
          <Route exact path="/contestform" element={<AdminContestForm />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/user" element={<StudentDashboard />}></Route>

        </Routes>
      
    </div>
  );
}

export default App;
