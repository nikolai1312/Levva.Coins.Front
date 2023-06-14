import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SearchTransactionsUseCase from "../../useCases/SearchTransactionsUseCase/SearchTransactionsUseCase";

interface formProps {
    query: string;
}

const formSchema = yup
    .object({
        query: yup.string(),
    })

export function SearchForm() {
    const { register, handleSubmit } = useForm<formProps>({
        resolver: yupResolver(formSchema),
    });

    function handleSearch({ query }: formProps) {
        SearchTransactionsUseCase.execute(query);
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
            <input type="text" placeholder="Busque por transações" {...register("query")} />

            <button type="submit">
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}