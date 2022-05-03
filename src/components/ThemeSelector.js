import { useTheme } from '../hooks/useTheme';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

const ThemeSelector = () => {
  const { changeColor } = useTheme();

  const buttons = themeColors.map((color) => (
    <div
      key={color}
      onClick={() => changeColor(color)}
      className="inline-block w-4 h-4 rounded-full cursor-pointer"
      style={{ background: color }}
    ></div>
  ));

  return <div className="flex justify-end mb-4 space-x-3">{buttons}</div>;
};

export default ThemeSelector;
