import Head from "next/head";
import Image from "next/image";
import {
	Container,
	ContainerCenter,
	ContainerContent,
	ContainerFlex,
} from "../components/Container";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ContainerFlex>
				<ContainerCenter>
					<ContainerContent>
						<Container align="center" width="100%">
							<Container margin="80px 0 50px 0">
								<Text weight="500" size="40px" align="center">
									Welcome Back
								</Text>
								<Text color="#636364" align="center">
									Welcome back! Please enter your details.
								</Text>
							</Container>
							<form>
								<Container margin="0 0 20px 0">
									<Text weight="600" pad="3px 0 3px 0">
										Email
									</Text>
									<Input type="text" placeholder="Enter Email" />
								</Container>

								<Container>
									<Text weight="600" pad="3px 0 3px 0">
										Password
									</Text>
									<Input type="password" placeholder="Password" />
								</Container>
								<Container
									direction="row"
									justify="space-between"
									margin="10px 0"
								>
									<Container direction="row" width="auto" align="center">
										<Input type="checkbox" />
										<Text>Remember me</Text>
									</Container>
									<Text>Forgot password</Text>
								</Container>
							</form>
						</Container>
					</ContainerContent>
					<ContainerContent bg="/images/bg.png"></ContainerContent>
				</ContainerCenter>
			</ContainerFlex>
		</div>
	);
}