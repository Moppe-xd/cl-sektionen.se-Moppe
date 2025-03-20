import Card from "@/components/Card";
import CustomHead from "@/components/CustomHead";
import styles from "@/styles/mottagning/mottagning.module.css";

import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchImageUrls } from "google-photos-album-image-url-fetch";

export default function Bilder() {
	const showDynamicImage = true;
	return (
		<>
			<CustomHead
				metaTitle={"Mottagningsbilder | Sektionen för Civilingenjör och Lärare"}
				description={"TEST_1"}
				url={"https://www.cl-sektionen.se/mottagning/classiker"}
			/>
			<div id="contentbody">
				<article>
					<div>
						<br />
						<p>
							Här hittar du länkar till Google Photos album från sektionens
							olika evenemang!
							<br />
							Kontakta{" "}
							<strong>
								<a href="mailto:classiker@cl-sektionen.se">CLassiker</a>
							</strong>{" "}
							om du inte vill synas på bild.
						</p>
						<h2>2025</h2>
						<div className={styles.cardList}>
							<Card link={"https://photos.app.goo.gl/RFCnrz8xGUVgsNcR7"} newTab>
								{showDynamicImage ? (
									<img
										src={getThumbnail(
											"https://photos.app.goo.gl/RFCnrz8xGUVgsNcR7",
										)}
										alt="Dynamiskbild"
									></img>
								) : (
									<FontAwesomeIcon icon={faImage} />
								)}
								CtyreLsen 2024
							</Card>
						</div>
						<h2>2024</h2>
						<div className={styles.cardList}></div>
						<h2>2023</h2>
						<div className={styles.cardList}></div>
					</div>
				</article>
			</div>
		</>
	);
}

async function getThumbnail(photoalbum) {
	try {
		const picture = await fetchImageUrls(photoalbum);
		return JSON.parse(picture[0]).url;
	} catch (error) {
		console.error("Gick inte att hämta bild urls:", error);
	}
}
