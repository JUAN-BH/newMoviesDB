import { Controls } from "../components/Controls";

export const MenuMobile = ({ isOpen, setIsOpen }) => {
  function closeMenuMobile(e) {
    const element = e.target.id;
    if (element.includes("backMenu")) {
      setIsOpen(false);
    }
  }

  return (
    <aside
      id="backMenu"
      className={`menuMobile ${isOpen ? "menuMobileShow" : "menuMobileHide"}`}
      onClick={closeMenuMobile}
    >
      <article className="menuMobile__content">
        <Controls />
      </article>
    </aside>
  );
};
