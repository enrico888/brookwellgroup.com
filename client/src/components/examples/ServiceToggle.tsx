import ServiceToggle from "../ServiceToggle";

export default function ServiceToggleExample() {
  return <ServiceToggle onSelectService={(s) => console.log("Selected:", s)} />;
}
