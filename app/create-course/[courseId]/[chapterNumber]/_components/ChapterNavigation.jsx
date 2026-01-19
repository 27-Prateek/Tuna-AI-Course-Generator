import { Button } from "@/components/ui/button";

export default function ChapterNavigation({
  hasPrev,
  hasNext,
  loading,
  onPrev,
  onNext,
}) {
  return (
    <div className="flex justify-between mt-10">
      <Button
        variant="outline"
        disabled={!hasPrev}
        onClick={onPrev}
      >
        Previous
      </Button>

      {hasNext && (
        <Button
          disabled={loading}
          onClick={onNext}
        >
          {loading ? "Generating..." : "Next Chapter"}
        </Button>
      )}
    </div>
  );
}
