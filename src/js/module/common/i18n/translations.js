angular.module("gerritDashboard").config(["i18nProvider", function (i18nProvider) {
    i18nProvider.translations["en"] = {
        "total_number_of_projects": "Total Number Of Project",
        "number_of_open_reviews": "Number Of Open Reviews",
        "number_of_commits": "Number Of Commits",
        "average_review_interval": "Average Review Interval",
        "most_committed_projects": "Most Committed Projects",
        "top_committers": "Top Committers",
        "top_reviewers": "Top Reviewers",
        "project_stats": "Project Stats",
        "project_reviewed": "Project Reviewed",
        "project_name": "Project Name",
        "reviews": "Reviews",
        "scores": "Scores",
        "score": "Score",
        "count": "Count",
        "average_merge_time": "Average Merge Time",
        "average_first_review_time": "Average First Review Time",
        "today": "Today",
        "this_week": "This Week",
        "this_month": "This Month",
        "last_30_days": "Last 30 Days",
        "last_6_months": "Last 6 Months"
    }
}]);