import './title.scss';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

function Title() {
    return (
        <div className="sectionTitle">
            <div className="right">
                <h2>داشبورد</h2>
                <span>فراز توانا عزیز خوش آمدید</span>
            </div>
            <div className="left">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        components={['DatePicker', 'DesktopDatePicker', 'MobileDatePicker']}
                    >
                        <DemoItem label="فیلتر کردن" slotProps={{ TextField:{fontFamily: 'Yekan Bakh'} }}>
                            <DatePicker defaultValue={null} />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
            </div>
        </div>
    )
}

export default Title