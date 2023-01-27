import { Divider } from '@mui/material'
import React from 'react'
import EmailSendBtn from '../../Components/Buttons/EmailSendBtn'
import ContainerItems from '../../Components/Containers/ContainerItems'
import { Link } from '../../Components/NavLink/NavLink'
import { PRIMARY_COLOR } from '../../Constants/Colors'
import { Links } from '../../_mocks/Footer'
import { PaymentTypes } from '../../_mocks/PaymentSupport'

export const Footer = () => {


  return (
		<div style={{ backgroundColor: "white" }}>
			<div style={{ width: "40%", margin: "auto", textAlign: "center" }}>
				<div
					style={{
						fontSize: "36px",
						fontWeight: "700",
						color: `${PRIMARY_COLOR.main}`,
						marginBottom: "10px",
					}}
				>
					RizoMulk
				</div>
				<div style={{ marginBottom: "10px" }}>
					Поделитесь с нами своей электронной почтой и мы сообщим вам о скидках,
					выгодных предложениях и новых продуктах.
				</div>
				<div style={{ marginBottom: "10px" }}>
					<EmailSendBtn
						placeholder="Email"
						borderradius="24px"
					  	borderright={'-12px'}
						name="Отправить"
					/>
				</div>
			</div>
			<div
				style={{
					padding: "16px 80px",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						width: "60%",
					}}
				>
					{Links.map((item) => {
						return (
							<div key={item.id} style={{ display: "grid" }}>
								<div style={{ fontWeight: "800" }}>{item.title}</div>
								{item.children.map((element) => {
									return (
										<Link
											key={element.id}
											classname={'opacity-100 text-sm font-medium'}
											style={{ marginBottom: "10px" }}
										>
											{element.title}
										</Link>
									);
								})}
							</div>
						);
					})}
				</div>
				<div style={{ width: "30%" }}>
					<ContainerItems style={{ display: "flex" }}>
						{PaymentTypes.map((item) => {
							return (
								<Link
									opacity={'100'}
									textsize={'base'}
									to={{ pathname: "https://uzcard.uz" }}
									key={item.id}
								>
									<div
										style={{ marginBottom: "10px", width: "30%" }}
										className="cursor-pointer mb-2 w-[33%]"
									>
										{item.icon}
									</div>
								</Link>
							);
						})}
					</ContainerItems>
				</div>
			</div>
			<Divider />
			<div className="flex justify-between px-20 py-4 opacity-60 ">
				<div>© 2022 — Rizo Mulk</div>
				<div className="flex justify-between w-1/2 ">
					<p>info@rizomulk.uz</p>
					<p>+998 97 123 45 67</p>
					<p>Узбекистан, Ташекент, Чиланзар</p>
				</div>
			</div>
		</div>
	);
}
export default Footer