import React, { Suspense, useState } from "react";
import "./styles.css";

const LazyOverlay = React.lazy(() => import("./LazyOverlay"));

const FallbackContent = () => {
	return <div className="overlay-fallback">Something went wrong!!</div>;
};

const OverlayLoader = ({ onClose, ...rest }) => {
	return (
		<div
			className="overlay-loader"
			onClick={() => {
				onClose();
			}}
		>
			<Suspense fallback={<FallbackContent />}>
				<LazyOverlay onClose={onClose} {...rest}>
					<div>This is an overlay, believe it!</div>
				</LazyOverlay>
			</Suspense>
		</div>
	);
};

export default function App() {
	const [showOverlay, setShowOverlay] = useState(false);

	const handleOverlayAction = () => setShowOverlay(!showOverlay);

	return (
		<div>
			<h1>Lazy Loading Demos</h1>
			<button
				className="theme-button"
				type="button"
				onClick={handleOverlayAction}
			>
				Show Overlay
			</button>
			<p>
				Click the button and check network tab to observe how lazy
				loading works
			</p>
			{showOverlay && <OverlayLoader onClose={handleOverlayAction} />}
		</div>
	);
}
