import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";
//import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService {
	createDb() {
		const categories: Category[] = [
			{ id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
			{ id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
			{ id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
			{ id: 4, name: 'Salário', description: 'Recebimento de Salário' },
			{ id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' }
		];

		const entries = [
			{ id: 1, name: 'Gás de Cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: "14/10/2018", amount: "70,80", type: "expense", description: "Qualquer descrição para essa despesa" },
			{ id: 2, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: false, date: "14/10/2018", amount: "15,00", type: "expense" },
			{ id: 3, name: 'Salário na Empresa X', categoryId: categories[3].id, category: categories[3], paid: true, date: "15/10/2018", amount: "4405,49", type: "revenue" }
		]

		return { categories, entries }
	}
}