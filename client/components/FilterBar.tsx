import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, X, ChevronDown, RotateCcw } from "lucide-react";

export interface FilterConfig {
  key: string;
  label: string;
  type: "text" | "select" | "date" | "number";
  options?: string[];
  placeholder?: string;
}

export interface FilterBarProps {
  filters: Record<string, string>;
  onFiltersChange: (filters: Record<string, string>) => void;
  filterConfigs: FilterConfig[];
  searchPlaceholder?: string;
  showSearch?: boolean;
  compact?: boolean;
}

export default function FilterBar({
  filters,
  onFiltersChange,
  filterConfigs,
  searchPlaceholder = "Buscar...",
  showSearch = true,
  compact = false,
}: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(!compact);

  const handleFilterChange = (key: string, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter((value) => value && value !== "")
      .length;
  };

  const renderFilterInput = (config: FilterConfig) => {
    const value = filters[config.key] || "";

    switch (config.type) {
      case "select":
        return (
          <Select
            value={value}
            onValueChange={(val) => handleFilterChange(config.key, val)}
          >
            <SelectTrigger>
              <SelectValue placeholder={config.placeholder || config.label} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todos</SelectItem>
              {config.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "number":
        return (
          <Input
            type="number"
            placeholder={config.placeholder || config.label}
            value={value}
            onChange={(e) => handleFilterChange(config.key, e.target.value)}
          />
        );

      case "date":
        return (
          <Input
            type="date"
            placeholder={config.placeholder || config.label}
            value={value}
            onChange={(e) => handleFilterChange(config.key, e.target.value)}
          />
        );

      case "text":
      default:
        return (
          <Input
            placeholder={config.placeholder || config.label}
            value={value}
            onChange={(e) => handleFilterChange(config.key, e.target.value)}
          />
        );
    }
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="space-y-4">
          {/* Search Bar (if enabled) */}
          {showSearch && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={searchPlaceholder}
                value={filters.search || ""}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="pl-10"
              />
            </div>
          )}

          {/* Filter Toggle */}
          {compact && (
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <div className="flex items-center justify-between">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filtros
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary" className="ml-2">
                        {activeFiltersCount}
                      </Badge>
                    )}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </CollapsibleTrigger>

                {activeFiltersCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <RotateCcw className="w-4 h-4 mr-1" />
                    Limpar
                  </Button>
                )}
              </div>

              <CollapsibleContent>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filterConfigs.map((config) => (
                    <div key={config.key} className="space-y-2">
                      <Label
                        htmlFor={config.key}
                        className="text-sm font-medium"
                      >
                        {config.label}
                      </Label>
                      {renderFilterInput(config)}
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}

          {/* Always Open Filters */}
          {!compact && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filtros
                  {activeFiltersCount > 0 && (
                    <Badge variant="secondary">{activeFiltersCount}</Badge>
                  )}
                </h3>
                {activeFiltersCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <RotateCcw className="w-4 h-4 mr-1" />
                    Limpar filtros
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filterConfigs.map((config) => (
                  <div key={config.key} className="space-y-2">
                    <Label htmlFor={config.key} className="text-sm font-medium">
                      {config.label}
                    </Label>
                    {renderFilterInput(config)}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Active Filters Display */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 pt-2 border-t">
              {Object.entries(filters)
                .filter(
                  ([key, value]) => value && value !== "" && key !== "search",
                )
                .map(([key, value]) => {
                  const config = filterConfigs.find((c) => c.key === key);
                  const label = config?.label || key;

                  return (
                    <Badge
                      key={key}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {label}: {value}
                      <button
                        onClick={() => handleFilterChange(key, "")}
                        className="ml-1 hover:text-red-600 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  );
                })}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
