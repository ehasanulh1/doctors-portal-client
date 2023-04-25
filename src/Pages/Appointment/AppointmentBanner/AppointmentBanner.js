import bannerImg from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;