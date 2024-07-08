import { ibm_plex_sans_thai, inter, kanit, sarabun } from "@/config/fonts";
import { cn } from "@/lib/utils";

export default function TestFont() {
  return (
    <main>
      <p
        className={cn(
          "font-ibm_plex_sansS_thai antialiased",
          ibm_plex_sans_thai.variable
        )}
      >
        โรงพยาบาลอรัญประเทศ
      </p>
      <p className={cn("font-inter antialiased", inter.variable)}>
        โรงพยาบาลอรัญประเทศ
      </p>
      <p className={cn("font-kanit antialiased", kanit.variable)}>
        โรงพยาบาลอรัญประเทศ
      </p>
      <p className={cn("font-sarabun antialiased", sarabun.variable)}>
        โรงพยาบาลอรัญประเทศ
      </p>
    </main>
  );
}
