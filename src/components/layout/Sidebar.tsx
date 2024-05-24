import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 ">
        <div className="sidebar min-h-screen w-[3.35rem] lg:w-56 overflow-hidden border-r transition-all  hover:bg-white hover:shadow-lg">
          <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <ul className="mt-6 space-y-2 tracking-wide">
                <li className="min-w-max">
                  <Link
                    href="/dashboard"
                    className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                  >
                    <LayoutDashboard />
                    <span className="group-hover:text-gray-700">
                      All Products
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
