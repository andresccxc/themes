import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../redux/themes/actions';
import { Wrapper } from './Styles';


const ChangeTheme = () => {

    const dispatch = useDispatch();
    const { currentTheme } = useSelector((state: any) => state.theme);
    const [brushClass, setBrushClass] = useState('');
    const changeTheme = (theme: string) => {
        dispatch(setTheme(theme));
        setBrushClass('');
    };


    return (
        <Wrapper>
            <div className={`shadow-theme absolute text-center ${brushClass}`} onClick={() => setBrushClass('brush-down')}>
                <i className="fas fa-paint-roller"></i>
                <div className='flex flex-col pt-1'>
                    {currentTheme?.split('')?.map((ele: string, index: number) => (
                        <small key={`letter-${index}`} className="theme-text">{ele}</small>))
                    }
                </div>
            </div>
            <div className="theme flex items-center justify-center font-bold text-sm" onClick={() => changeTheme('theme1')}>T-1</div>
            <div className="theme flex items-center justify-center font-bold text-sm" onClick={() => changeTheme('theme2')}>T-2</div>
            {brushClass && (<i className="fas fa-sort-up absolute" onClick={() => setBrushClass('')}></i>)}
        </Wrapper>
    );
}

export default ChangeTheme;