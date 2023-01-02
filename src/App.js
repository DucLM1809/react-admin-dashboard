import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Topbar from './pages/global/Topbar'
import SidebarLayout from './pages/global/Sidebar'
import { ProSidebarProvider } from 'react-pro-sidebar'
import Dashboard from './pages/dashboard'
import Team from './pages/team'
import Contacts from './pages/contacts'
import Invoices from './pages/invoices'
import Form from './pages/form'
import Calendar from './pages/calendar'
import FAQ from './pages/faq'
import Bar from './pages/bar'
import Pie from './pages/pie'
import Line from './pages/line'
import Geography from './pages/geography'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <div className='app'>
            <SidebarLayout />
            <main className='content'>
              <Topbar />
              <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/team' element={<Team />}></Route>
                <Route path='/contacts' element={<Contacts />}></Route>
                <Route path='/invoices' element={<Invoices />}></Route>
                <Route path='/form' element={<Form />}></Route>
                <Route path='/calendar' element={<Calendar />}></Route>
                <Route path='/faq' element={<FAQ />}></Route>
                <Route path='/bar' element={<Bar />}></Route>
                <Route path='/pie' element={<Pie />}></Route>
                <Route path='/line' element={<Line />}></Route>
                <Route path='/geography' element={<Geography />}></Route>
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
