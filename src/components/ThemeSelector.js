import { useTheme } from '../hooks/useTheme';
import modeIcon from '../assets/mode-icon.svg';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme(); // state.mode, state.changeMode, state.changeColor

  const buttons = themeColors.map((color) => (
    <div
      key={color}
      onClick={() => changeColor(color)}
      className="w-4 h-4 rounded-full cursor-pointer "
      style={{ background: color }}
    ></div>
  ));

  const toggleMode = () => changeMode(mode === 'dark' ? 'light' : 'dark');
  console.log(mode);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <img
          className="w-6 h-6 cursor-pointer"
          src={modeIcon}
          alt="dark/light icon"
          onClick={toggleMode}
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
        />
        <div className="flex space-x-2 ">{buttons}</div>
      </div>
    </div>
  );
};

export default ThemeSelector;
