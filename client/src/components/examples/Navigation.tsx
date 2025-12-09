import Navigation from "../Navigation";

export default function NavigationExample() {
  return <Navigation onNavigate={(section) => console.log("Navigate to:", section)} />;
}
