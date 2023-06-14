import { ReactNode } from "react";

import levvaCoinsLogo from "../../assets/logo.svg";

import { Modal } from "../Modal";
import { HeaderContainer, HeaderContent, SignOutButton, UserAvatar } from "./styles";
import { Form, FormInput, FormButton } from "../../styles/global";
import { router } from "../../Router";
import { CategoryModal } from "./CategoryModal";
import { TransactionModal } from "./TransactionModal";

export function Header() {
    const userAvatar: ReactNode = (<UserAvatar src="https://avatars.githubusercontent.com/u/107963322?v=4" />);

    function handleSignOut() {
        window.localStorage.removeItem("user");
        router.navigate("/login");
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={levvaCoinsLogo} alt="levva coins" />

                <div>
                    <CategoryModal />
                    <TransactionModal />
                </div>
                <Modal title="Meu perfil" trigger={userAvatar}>
                    <Form>
                        <UserAvatar src={FotoPerfil} alt="foto de perfil" variant="large" />
                        <FormInput type="name" value="Nicolas Evangelista" />
                        <FormInput type="email" placeholder="nicolas.evangelista@levva.io" disabled />
                        <FormButton type="submit">Atualizar</FormButton>
                        <SignOutButton type="button" onClick={handleSignOut}>
                            Sair
                        </SignOutButton>
                    </Form>
                </Modal>
            </HeaderContent>
        </HeaderContainer>
    )
}