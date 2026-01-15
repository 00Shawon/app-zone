import Image from "next/image";
import Link from "next/link";

export default function AppCard({ app }) {
  return (
    <div className="rounded-xl border border-base-300 bg-base-100 p-4 hover:shadow-md transition">
      
      {/* Header */}
      <div className="flex items-center gap-3 ">
        <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-base-200">
          <img src={app.image} alt={app.title} className="object-cover"/>
       
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold leading-tight truncate">
            {app.title}
          </h3>
          <p className="text-sm text-base-content/60 truncate">
            {app.companyName}
          </p>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-4 flex items-center justify-between text-sm text-base-content/70">
        <span>⭐ {app.ratingAvg}</span>
        <span>{(app.downloads / 1_000_000).toFixed(0)}M+</span>
      </div>

      {/* Action */}
      <Link
        href={`/${app.id}`}
        className="btn btn-outline btn-sm w-full mt-4 rounded-md"
      >
        View Details
      </Link>
    </div>
  );
}
