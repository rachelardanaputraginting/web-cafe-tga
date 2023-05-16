import Navbar from './Navbar';

export default function App({ children }) {
    // const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen">
            <Navbar />
            <div >{children}</div>
        </div>
    );
}
