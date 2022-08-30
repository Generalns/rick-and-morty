import React, { useState } from "react";
import Sound from "react-sound";
import DaftPunk from "../public/bg.mp3";
import { FaPlay } from "react-icons/fa";
import { IoStop } from "react-icons/io5";

const PlaySound = () => {
	const [SoundStatus, setSoundStatus] = useState(Sound.status.PAUSED);
	const [Condition, setCondition] = useState(true);
	const [OnOff, setOnOff] = useState(false);

	const handleSoundPlay = () => {
		setCondition(!Condition);
		if (Condition) {
			setSoundStatus(Sound.status.PLAYING);
			setOnOff(true);
		} else {
			setSoundStatus(Sound.status.PAUSED);
			setOnOff(false);
		}
	};
	return (
		<div>
			<button onClick={handleSoundPlay}>
				{OnOff ? (
					<IoStop className="text-xl sm:text-3xl" />
				) : (
					<FaPlay className="text-xl sm:text-3xl" />
				)}
			</button>
			<Sound
				playFromPosition={4000}
				loop={true}
				autoLoad={true}
				url={DaftPunk}
				playStatus={SoundStatus}
			/>
		</div>
	);
};
export default PlaySound;
