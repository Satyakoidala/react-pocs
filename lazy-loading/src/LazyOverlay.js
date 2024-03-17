import React from "react";

const Overlay = ({ children, onClose, ...rest }) => {
	return (
		<React.Fragment>
			<div
				className="overlay"
				onClick={(e) => {
					// to prevent closing overlay, if clicked on overlay content
					e.stopPropagation();
				}}
				{...rest}
			>
				{children}
				<button
					type="button"
					className="overlay-close-btn"
					onClick={() => {
						onClose();
					}}
				>
					X
				</button>
			</div>
		</React.Fragment>
	);
};

// const LazyOverlay = React.lazy(() => Overlay);

export default Overlay;
