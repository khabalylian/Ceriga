import Main from '@/Layout/Main/Main';
import CustomClothing from '@/Layout/CustomClothing/CustomClothing';
import Popular from '@/Layout/Popular/Popular';
import AddInform from '@/Layout/AddInform/AddInform';
import MainContent from '@/Layout/Main/components/MainContent/MainContent';

export default function Home() {
  return (
    <div>
      	<MainContent/>
		<CustomClothing/>
		<Popular/>
		<AddInform/>
    </div>
  );
}
