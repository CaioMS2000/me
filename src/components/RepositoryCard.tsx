import { Repository } from "@/models";
import { PropsWithChildren } from "react";

interface RepositoryCardProps extends PropsWithChildren {
	repository: Repository;
}

export default async function RepositoryCard({
	repository,
}: RepositoryCardProps) {
	return (
		<>
			<div className="card w-72 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title">{repository.name}</h2>
					<p>{repository.description}</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Navegar</button>
					</div>
				</div>
			</div>
		</>
	);
}
