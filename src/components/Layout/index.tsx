import { useState } from 'react';
import Api from '../../modules/api';
import style from './Layout.module.css'
declare var window: any;

window.UpdateWinSize = () => {
  if (window.SetWinSize != null) {
    let newSize = window.visualViewport?.height;
    if (newSize != null) {
      window.SetWinSize(`${newSize}px`);
      window.scrollTo(0, 0);
    }
  }
}
window.addEventListener("resize", () => {
  window.UpdateWinSize();
});
interface LayoutProps {
  children: any
}
window.api = new Api();
function Layout(props: LayoutProps) {
  const [winSize, SetWinSize] = useState(`${window.visualViewport?.height}px`);
  window.SetWinSize = SetWinSize;
  return (
    <div className={style.Layout} style={{ height: winSize }}>
      {props.children}
    </div>
  );
}

export default Layout;
