import Layout from "./components/Layout/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { mock } from "./constants/mock";
import BookPage from "./pages/BookPage/BookPage";
import {Routes,Route,BrowserRouter,Navigate} from "react-router-dom"


export function App(){

    return <Layout>
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<MainPage genres={ mock }/>}/>
                <Route path="/book" element={<BookPage book={mock[0].books[1]}/>}/>
                {/* <Route
                path="*"
                element={<Navigate to="/" replace />}
                /> */}
            </Routes>
        </BrowserRouter>
    </Layout>
}